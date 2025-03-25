import QRCode from "react-qr-code";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Mail, Phone, Linkedin, Globe, Instagram, Calendar, Facebook } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-sm sm:max-w-md p-6 rounded-2xl shadow-xl bg-white">
        <div className="flex flex-col items-center">
          <img
            src="https://i.imgur.com/l3sa4rL.jpg"
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-blue-500"
          />
          <h1 className="text-2xl font-bold mt-4">Neel Patel</h1>
          <p className="text-gray-600">Real Estate Broker | Cloud Team Realty</p>

          <div className="mt-6 w-full flex flex-col space-y-3 sm:space-y-2">
            <a href="mailto:neel@cloudteamrealty.com" className="w-full">
              <Button variant="outline" className="w-full">
                <Mail className="mr-2 h-4 w-4" /> Email Me: neel@cloudteamrealty.com
              </Button>
            </a>
            <a href="tel:3466334100" className="w-full">
              <Button variant="outline" className="w-full">
                <Phone className="mr-2 h-4 w-4" /> Call Me: (346) 633-4100
              </Button>
            </a>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a href="https://www.linkedin.com/in/neel-patel-3b4a7885/" target="_blank" rel="noreferrer">
              <Linkedin className="text-blue-600 w-6 h-6" />
            </a>
            <a href="https://cloudteamtx.com" target="_blank" rel="noreferrer">
              <Globe className="text-gray-800 w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/1.neel.patel/" target="_blank" rel="noreferrer">
              <Instagram className="text-pink-500 w-6 h-6" />
            </a>
            <a href="https://outlook.office.com/bookwithme/user/eb049d4aba944ae6ab86dd29be7a5dd2%40cloudteamtx.com/meetingtype/VictKiwao0a4iP6HfLGOxQ2?anonymous=" target="_blank" rel="noreferrer">
              <Calendar className="text-green-600 w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/neel.patel.56211497" target="_blank" rel="noreferrer">
              <Facebook className="text-blue-800 w-6 h-6" />
            </a>
          </div>

          <a
            href="/neel-patel.vcf"
            download
            className="mt-4 inline-block text-blue-600 underline"
          >
            Save to Contacts
          </a>

          <div className="mt-6">
            <QRCode value="https://digital-card-jvcw.vercel.app" size={128} />
          </div>
        </div>
      </Card>
    </div>
  );
}
