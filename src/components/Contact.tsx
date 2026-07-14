import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Wire this up to your own backend/email service (e.g. a POST to /api/contact).
    setStatus("sent");
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="contact section-group section-padding bg-ink py-[120px]">
      <div className="container">
        <div className="section-head mx-auto mb-[80px] text-center lg:w-8/12">
          <h4>Contact</h4>
        </div>

        <div className="row grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div
              className="info bg-img space-y-[30px] rounded-md bg-cover bg-center pt-[30px]"
              style={{ backgroundImage: "url(/image/map.png)" }}
            >
              <div className="item break-words">
                <div className="cont">
                  <h6 className="mb-[5px] text-[11px] font-normal uppercase tracking-[2px] text-gold">
                    Phone :
                  </h6>
                  <p>+251 960 847 511</p>
                </div>
              </div>
              <div className="item break-words">
                <div className="cont">
                  <h6 className="mb-[5px] text-[11px] font-normal uppercase tracking-[2px] text-gold">
                    Address :
                  </h6>
                  <p>Kazanchis, Addis Ababa, Ethiopia</p>
                </div>
              </div>
              <div className="item break-words">
                <div className="cont">
                  <h6 className="mb-[5px] text-[11px] font-normal uppercase tracking-[2px] text-gold">
                    Email :
                  </h6>
                  <p>mequaninthabtamu12@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="form space-y-5">
              {status === "sent" && (
                <div className="rounded-[30px] bg-gold/20 px-4 py-3 text-sm text-gold">
                  Thanks! Your message has been sent.
                </div>
              )}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Input
                  name="name"
                  placeholder="Name"
                  required
                  className="rounded-[30px] bg-[#222] px-[15px] py-[15px]"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="rounded-[30px] bg-[#222] px-[15px] py-[15px]"
                />
              </div>
              <Input
                name="subject"
                placeholder="Subject"
                className="rounded-[30px] bg-[#222] px-[15px] py-[15px]"
              />
              <Textarea
                name="message"
                placeholder="Message"
                rows={4}
                required
                className="h-[160px] max-h-[160px] rounded-[10px] bg-[#222] px-[15px] py-[15px]"
              />
              <div className="text-center">
                <Button type="submit" className="float-none md:float-right">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
