import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface CalloutProps {
	icon: React.ReactNode;
	title: string;
	children: React.ReactNode;
}

export function Callout({ icon, title, children: description }: CalloutProps) {
	return (
		<Alert className="mt-4 bg-white dark:bg-black">
			{icon}
			{title && <AlertTitle>{title}</AlertTitle>}
			<AlertDescription>{description}</AlertDescription>
		</Alert>
	);
}