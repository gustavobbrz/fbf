import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFileAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-12 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Links Úteis */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400 flex items-center gap-2">
              <FaFileAlt /> Links Úteis
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://cdn.discordapp.com/attachments/662458680259903521/1360837494861598752/Regulamento_FBF.pdf?ex=68012f6d&is=67ffdded&hm=cc4d1f46b41e7afcf0e027b28337655a7b40f64cb142bc86027490a48b851b9f&"
                  download
                  className="hover:text-yellow-400 transition"
                >
                  Regulamento
                </a>
              </li>
              <li><Link href="/faq" className="hover:text-yellow-400 transition">FAQ</Link></li>
              <li><Link href="/calendario" className="hover:text-yellow-400 transition">Calendário</Link></li>
              <li><Link href="/tutoriais" className="hover:text-yellow-400 transition">Tutoriais</Link></li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400 flex items-center gap-2">
              <FaInstagram /> Redes Sociais
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-yellow-400 transition"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-yellow-400 transition"><FaInstagram /></a>
              <a href="#" className="text-2xl hover:text-yellow-400 transition"><FaTwitter /></a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400 flex items-center gap-2">
              <FaEnvelope /> Contato
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><FaEnvelope /> contato@fbfhaxball.com.br</li>
              <li className="flex items-center gap-2"><FaPhone /> (11) 98765-4321</li>
              <li className="flex items-center gap-2"><FaMapMarkerAlt /> São Paulo, Brasil</li>
            </ul>
          </div>

          {/* Termos */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400 flex items-center gap-2">
              <FaFileAlt /> Termos
            </h3>
            <ul className="space-y-2">
              <li><Link href="/privacidade" className="hover:text-yellow-400 transition">Versão 1.0</Link></li>
              <li><Link href="/termos" className="hover:text-yellow-400 transition">Desenvolvido por billy</Link></li>
              <li className="mt-4 text-sm opacity-75"> Todos os direitos reservados. &copy; {new Date().getFullYear()} FBF Haxball</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
