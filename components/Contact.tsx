import React, { useState } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("https://formspree.io/f/xeojddwo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        setSuccess("Pesan terkirim!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error("Gagal mengirim pesan.");
      }
    } catch (error) {
      setError("Gagal mengirim pesan. Silakan coba lagi.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="id-contact"
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat p-36"
      style={{ backgroundImage: "url(/img/contactbanner.jpg)" }}
    >
      <div className="flex w-full h-[100%]">
        <div className="w-[50%] h-[100%]">
          <h1 className="text-white eudoxus-xbold text-contact mb-12">
            Let&rsquo;s <br /> <span className="w-auto h-auto bg-white text-black">Connect!</span>
          </h1>
          <div className="mb-4">
            <h2 className="text-white generalSans-semibold text-[1.7rem]">
              Mail
            </h2>
            <p className="text-white generalSans-regular text-lg">
              zaqazaqaul@gmail.com
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-white generalSans-semibold text-[1.7rem]">
              Address
            </h2>
            <p className="text-white generalSans-regular text-lg">
              Padang, West Sumatera
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-white generalSans-semibold text-[1.7rem]">
              Contact
            </h2>
            <p className="text-white generalSans-regular text-lg">
              +62 8238 4928 968
            </p>
          </div>
        </div>
        <div className="w-[50%] h-[100%] space-y-5">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="gradient-border rounded-lg">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-[100%] h-14 rounded-lg bg-white/15 backdrop-blur-lg border-none placeholder-white text-white px-4 outline-none focus-gradient generalSans-regular"
                required
              />
            </div>
            <div className="gradient-border rounded-lg">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[100%] h-14 rounded-lg bg-white/15 backdrop-blur-lg border-none placeholder-white text-white px-4 outline-none focus-gradient generalSans-regular"
                required
              />
            </div>
            <div className="gradient-border rounded-lg">
              <textarea
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-[100%] h-52 rounded-lg bg-white/15 backdrop-blur-lg border-none placeholder-white text-white px-4 pt-4 outline-none focus-gradient resize-none generalSans-regular custom-scrollbar overflow-y-auto"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-[100%] h-14 rounded-lg bg-[#1D6167] text-white font-semibold transition-all duration-300 transform active:scale-105"
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Submit'}
            </button>

            {error && (
              <div className="text-red-500 mt-4 generalSans-regular">
                {error}
              </div>
            )}

            {success && (
              <div className="text-green-500 mt-4 generalSans-regular">
                {success}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
