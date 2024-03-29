import gitHubLogo from "../public/icons/githublogo.png";
import linkedInLogo from "../public/icons/linkedin.png";
import gmailLogo from "../public/icons/email.png";
import whatsApp from "../public/icons/whatsapp.png";
interface ContactsListType {
	title: string;
	icon: string;
	link: string;
}
const ContactsList: ContactsListType[] = [
	{
		title: "LinkedIn",
		icon: linkedInLogo,
		link: "https://www.linkedin.com/in/benito-varghese-1a0451194",
	},
	{ title: "Github", icon: gitHubLogo, link: "https://github.com/benj3110" },
	{ title: "WhatsApp", icon: whatsApp, link: "https://wa.me/0447850419353" },
];
const Email: {
	title: string;
	icon: string;
	link: string;
} = { title: "Email", icon: gmailLogo, link: "benitovark@gmail.com" };

export { ContactsList, Email };
