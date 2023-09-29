import { IconType } from "react-icons";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

export interface DrawerListItemsProps {
    Name: string;
    Link: string;
}

export interface ContactInfoProps {
    Name: string;
    Link: string;
    Icon: IconType;
}

export const DrawerListItems: DrawerListItemsProps[] = [
    {
        Name: "Home",
        Link: "/"
    },
    {
        Name: "Blogs",
        Link: "/blogs"
    },
    {
        Name: "About",
        Link: "/about"
    }
]

export const ContactInfo: ContactInfoProps[] = [
    {
        Name: "LinkedIn",
        Link: "https://www.linkedin.com/in/anchitdhar/",
        Icon: AiFillLinkedin
    },
    {
        Name: "GitHub",
        Link: "https://github.com/goanchit/",
        Icon: AiFillGithub
    },
    {
        Name: "Email",
        Link: "anchitdhar1@gmail.com",
        Icon: AiOutlineMail
    }
]