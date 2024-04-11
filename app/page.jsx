"use client";

import StudentForm from "@/components/StudentForm";
import InstituteForm from "@/components/InstituteForm";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [profile, setProfile] = useState("Student");
  return (
    <main className="h-auto my-8">
      <div className="flex h-screen gap-4 justify-center items-center p-14">
        <div>
          <h1 className="text-4xl font-bold text-gray-300">
            Join the community of over 10,000 professionals!
          </h1>
          <p className="py-6 text-sm text-black font-medium">
            Signup Now. Already have an account?{" "}
            <Link href={"/login"} className="text-indigo-600 ">
              Login
            </Link>
          </p>
          <div className="gap-5 w-1/3 py-1.5 text-center rounded-full border-2 border-indigo-50">
            <button
              onClick={() => setProfile("Student")}
              className={`${
                profile === "Student" ? "active-button" : ""
              } text-sm mx-2 px-4 py-2 rounded-full transition-all duration-300`}
            >
              Student
            </button>
            <button
              onClick={() => setProfile("Institute")}
              className={`${
                profile === "Institute" ? "active-button" : ""
              } text-sm rounded-full px-4 py-2 mx-2`}
            >
              Institute
            </button>
          </div>
          {profile === "Student" ? <StudentForm /> : <InstituteForm />}
        </div>
        <div>
          <Image
            src="/trial image.png"
            width={650}
            height={100}
            alt="Image"
            className="rounded-2xl ml-0 drop-shadow hover:drop-shadow-xl transition-all duration-300 hover:-translate-y-1"
          />
        </div>
      </div>
    </main>
  );
}
