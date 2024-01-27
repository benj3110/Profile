import { ContactsList } from "../../data/ContactsList";
import ContactsCard from "./ContactsCard";

const Contacts: React.FC = () => {
    return (<>
        <section id="contacts">
            {ContactsList.map((contact) => (
                <ContactsCard>
                    {contact.title}
                </ContactsCard>
            ))}
        </section>
    </>);
}

export default Contacts;