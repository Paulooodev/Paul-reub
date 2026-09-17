"use client";

import { useState } from "react";

const INFO_EMAIL = "info@paulreub.com";

const PROJECT_TYPES = [
  "Consulting engineering (design, planning, supervision)",
  "Building & civil works (buildings, roads, infrastructure)",
  "Property development (residential, commercial, mixed-use)",
  "Other / not sure yet",
];

export default function InfoForm(){
    const [form, setForm] = useState({
        name: "",
        email: "",
        projectType: PROJECT_TYPES[0],
        message: "",
    });

    const update = (key: keyof typeof form, value: string) => 
            setForm((f) => ({ ...f, [key]: value }));

    const handleSubmit = (e: React.FormEvent) => {
       e.preventDefault();
       
       // Compose the email body from the form state
       const subject = encodeURIComponent(`Info request - ${form.projectType}`);
       const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n` + 
        `Project type: ${form.projectType}\n\n${form.message}`
       );

       // Open the visitor's mail client, pre-filled
       window.location.href = `mailto:${INFO_EMAIL}?subject${subject}&body=${body}`
    };

    return (
        <form
          onSubmit={handleSubmit}
          className="rounded-[10px] border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-sm"
        >
      <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-light">
        Request a bid
      </div>

       <div className="grid gap-4 sm:grid-cols-2">
        {/* Name */}
          <label className="block">
          <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
            Full name
          </span>

            <input
                type="text"
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Adaeze Okonkwo"
                className="w-full rounded-md border border-white/15 bg-transparent px-3.5 py-2.5
                       text-sm text-paper placeholder:text-white/30
                       focus:border-brand focus:outline-none"
            />          
          </label>  

        {/* Email */}
          <label className="block">
          <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
            Email
          </span>

            <input
                type="text"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-md border border-white/15 bg-transparent px-3.5 py-2.5
                       text-sm text-paper placeholder:text-white/30
                       focus:border-brand focus:outline-none"
            />          
          </label>  

           {/* Project type */}
           <label className="block sm:col-span-2">
             <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
                Project type
            </span>
            <select 
                value={form.projectType} 
                onChange={(e) => update("projectType", e.target.value)}
                className="w-full rounded-md border border-white/15 bg-night px-3.5 py-2.5
                       text-sm text-paper focus:border-brand focus:outline-none"
            >
                {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}  
                    </option>
                ))}
            </select>
           </label>

        {/* Message */}
        <label className="block sm:col-span-2">
        <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
            Project details
          </span>  

          <textarea 
            required
            rows={4}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Location, scope, timeline; anything you know so far."
            className="w-full resize-y rounded-md border border-white/15 bg-transparent px-3.5 py-2.5
                       text-sm text-paper placeholder:text-white/30
                       focus:border-brand focus:outline-none"
           /> 
        </label>           
        </div> 

         {/* Submit */}   
        <button
            type="submit"
            className="mt-6 w-full rounded-md bg-brand px-8 py-4 text-[15px] font-bold text-ink
                    transition-colors hover:bg-brand-dark sm:w-auto"
        >
            Send request
        </button> 

         <p className="mt-4 font-mono text-[10.5px] leading-relaxed tracking-wide text-white/40">
            Opens your email app with the details pre-filled — no data is stored
            on this site.
         </p>     
        </form>
    );
}