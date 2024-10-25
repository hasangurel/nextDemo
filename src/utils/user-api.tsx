import {BACKEND_API} from "@/utils/constans";

export async function apiAuthSignUp(credentials: {
    name:string;
    username: string;
    email: string;
    password: string;
}) {
    try {
        console.log(BACKEND_API);
        const response = await fetch(`${BACKEND_API}/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        console.log("screds", credentials);
        if (!response.ok) {
            return new Error("Sign-up failed");
        }

        const data = await response.json();
        console.log("data", data);
        if (data.error) {
            return { error: data.message };
        }

        return data; // Return the response data on successful sign-up
    } catch (error) {
        // @ts-ignore
        console.log(error?.message, "No connection to Backend");
        return error;
    }
}