import SignUpForm from "./signup-form";
import { redirect } from "next/navigation";

export const metadata = {
    title: "Sign Up Page",
    description: "Sign up for our app",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function SignUpPage() {


    return (
        <div>
            Hi There
            <div>
                <SignUpForm />
            </div>
        </div>
    );
}