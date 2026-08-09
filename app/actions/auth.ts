"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE_NAME, vdrCredentials } from "@/lib/config";

export type LoginState = {
  error?: string;
};

export async function login(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const username = String(formData.get("username") || "").trim();
  const password = String(formData.get("password") || "");

  const isValid =
    username === vdrCredentials.username &&
    password === vdrCredentials.password;

  if (!isValid) {
    return { error: "Invalid username or password. Please try again." };
  }

  cookies().set(AUTH_COOKIE_NAME, "granted", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
  });

  redirect("/dashboard");
}

export async function logout() {
  cookies().delete(AUTH_COOKIE_NAME);
  redirect("/login");
}
