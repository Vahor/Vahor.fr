import { NotionBlockType, NotionContent, TextElement, Annotations, NotionBlockContent, NotionBlockImageContent } from "./types";
import { Fragment, ReactElement } from "react"
import styles from "styles/Notion/notion.module.css"

interface Props {
    page: NotionContent
}

const CheckIcon = () => {
    return <svg stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 20 20" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd">
        </path>
    </svg>
}

const BlockWrapper = (type: NotionBlockType, block: any, children: ReactElement): ReactElement => {
    switch (type) {
        case "heading_1":
            return <h1 className="!mb-2">{children}</h1>
        case "heading_2":
            return <h2 className="!mt-2">{children}</h2>
        case "paragraph":
            return <p>{children}</p>
        case "bulleted_list_item":
            return <li className="pl-2 !my-1">{children}</li>
        case "image":
            return <figure className={`${styles.wide} text-center`}>
                <img src={block.external?.url} alt={block.caption?.[0].plain_text || ""} className="rounded-md" />
                {block.caption && (
                    <figcaption>{children}</figcaption>
                )}
            </figure>
        case "to_do":
            return <div>
                <label
                    className="flex items-center font-light group cursor-pointer w-max"
                >
                    <div
                        className={`flex items-center justify-center border transition-colors duration-100 rounded-md h-5 w-5 bg-white`}
                    >
                        {block.checked && CheckIcon()}
                    </div>
                    <span className={`ml-2 mr-1 ${block.checked ? "line-through" : ""}`}>{children}</span>
                </label>
            </div>
    }

    return <div>{children}</div>
}

const BlockClass = (annotations: Annotations) => {
    let className = ""
    if (annotations.bold) className += "font-bold"
    if (annotations.italic) className += "italic"
    if (annotations.underline) className += "underline"
    if (annotations.strikethrough) className += "line-through"
    return className
}

const BlockText = (text: TextElement) => {
    if (text.href) {
        return <a href={text.href} className={BlockClass(text.annotations)}>{text.plain_text}</a>
    }
    return <span className={BlockClass(text.annotations)}>{text.plain_text}</span>
}


const NotionPageContent = ({ page }: Props) => {

    if (!page) {
        return <div>Chargement</div>
    }

    return (

        <article className={`py-8 container prose lg:prose-lg max-w-none ${styles.base}`}>
            {page.results.map((block, i) => {

                const type = block.type
                return <Fragment key={i}>
                    {BlockWrapper(type, block?.[type], (
                        <>
                            {block?.[type].text?.map((text: TextElement) => {
                                return <>{BlockText(text)}</>
                            })}
                        </>
                    )
                    )}
                </Fragment>
            })}
        </article>
    )
}


export default NotionPageContent