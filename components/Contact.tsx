import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // You can replace the Formspree URL below with your own endpoint after registering for free at formspree.io
  return (
    <section id="contact" className="py-16 bg-white">
      <h2 className="text-2xl font-bold mb-4 text-blue-300">Contact</h2>
      <form
        className="bg-[#181c20] p-6 rounded-xl shadow-lg space-y-4"
        action="https://formspree.io/f/xoqgnyoq" 
        method="POST"
        target="_blank"
        onSubmit={() => setSent(true)}
      >
        <div>
          <label className="block mb-1 text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-3 py-2 rounded bg-[#23272e] text-white focus:outline-none"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-3 py-2 rounded bg-[#23272e] text-white focus:outline-none"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-300">Message</label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full px-3 py-2 rounded bg-[#23272e] text-white focus:outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold"
        >
          Send Message
        </button>
        {sent && (
          <p className="text-green-400 mt-2">Thanks for reaching out! I'll get back to you soon.</p>
        )}
      </form>
      <div className="flex items-center space-x-6 mt-8 justify-center">
        <a href="mailto:alanthoma98@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
          <svg width="28" height="28" fill="currentColor" className="text-blue-400 hover:text-blue-200"><path d="M4 4h20v20H4V4zm2 2v16h16V6H6zm8 7l-8-5v12h16V8l-8 5z"/></svg>
        </a>
        <a href="https://github.com/ALANTHOMAS98" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg width="28" height="28" fill="currentColor" className="text-blue-400 hover:text-blue-200"><path d="M14 2C7.373 2 2 7.373 2 14c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 0-.285-.012-1.232-.017-2.236-3.338.725-4.042-1.612-4.042-1.612-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.774.418-1.305.76-1.606-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.222-.123-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.51 11.51 0 0 1 3.005-.404c1.02.005 2.049.138 3.004.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.242 2.874.119 3.176.77.841 1.235 1.912 1.235 3.222 0 4.609-2.804 5.624-5.475 5.921.429.372.812 1.102.812 2.222 0 1.604-.014 2.897-.014 3.293 0 .32.192.694.801.576C18.565 23.796 22 19.298 22 14c0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/alan-thomas-736b44270" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg width="28" height="28" fill="currentColor" className="text-blue-400 hover:text-blue-200"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.5c0-1.076-.023-2.462-1.5-2.462-1.5 0-1.732 1.175-1.732 2.388v4.574h-3v-9h2.879v1.232h.041c.4-.76 1.38-1.562 2.841-1.562 3.039 0 3.6 2 3.6 4.594v4.736z"/></svg>
        </a>
        <a href="https://wa.me/+37125126667" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <svg width="28" height="28" fill="currentColor" className="text-blue-400 hover:text-blue-200"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.669.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.148-.669-1.612-.916-2.209-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.521.074-.793.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.097 3.2 5.077 4.363.71.306 1.263.489 1.696.625.713.227 1.361.195 1.874.118.571-.084 1.758-.719 2.006-1.413.248-.695.248-1.291.173-1.414-.074-.123-.272-.198-.571-.347z"/><path d="M14.509 2.275c-6.238 0-11.29 5.053-11.29 11.292 0 1.993.522 3.937 1.514 5.647l-1.603 5.863 6.011-1.579c1.672.914 3.548 1.399 5.527 1.399h.005c6.236 0 11.288-5.053 11.288-11.292 0-3.018-1.178-5.854-3.322-7.997-2.143-2.143-4.979-3.22-7.997-3.22zm0 20.258c-1.829 0-3.627-.496-5.178-1.433l-.371-.221-3.571.939.954-3.48-.241-.357c-.953-1.416-1.457-3.062-1.457-4.772 0-5.021 4.087-9.108 9.108-9.108 2.437 0 4.728.95 6.456 2.679 1.729 1.729 2.677 4.021 2.677 6.459 0 5.02-4.086 9.107-9.107 9.107z"/></svg>
        </a>
      </div>
      <p className="mt-8 text-center text-blue-400">Spoken Languages: English, Hindi, Malayalam, Latvian (Basic)</p>
    </section>
  );
}

