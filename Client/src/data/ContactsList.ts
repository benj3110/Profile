import gitHubLogo from "../assets/githublogo.png";
import linkedInLogo from "../assets/LinkedIn_logo_initials.png";
import gmailLogo from "../assets/Gmail_icon_(2020).png";
import whatsApp from "../assets/whatsappLogo.png";
interface ContactsListType {
	title: string;
	icon: string;
	link: string;
}
const ContactsList: ContactsListType[] = [
	{ title: "LinkedIn", icon: linkedInLogo, link: "linkedin.com" },
	{ title: "Email", icon: gmailLogo, link: "benitovark@gmail.com" },
	{ title: "Github", icon: gitHubLogo, link: "github.com" },
	{ title: "Number", icon: whatsApp, link: "whatsapp.com" },
];

export { ContactsList };
