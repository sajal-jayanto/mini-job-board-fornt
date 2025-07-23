"use server";

import { cookies } from "next/headers";

export const setAuthToken = async (token: string) => {
  try {
    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 1,
    });
    return true;
  } catch (error) {
    console.error("Error storing auth token:", error);
    return false;
  }
}

export const getAuthToken = async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value || "";
    return token;
  } catch (error) {
    console.error("Failed to retrieve auth tokens:", error);
    return "";
  }
}