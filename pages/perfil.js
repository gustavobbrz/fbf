import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Perfil() {
  const [perfil, setPerfil] = useState(null);
  const [form, setForm] = useState({ nome: '', discord: '', youtube: '', time_id: '', posicoes: '' });
  const [msg, setMsg] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }
    fetch(process.env.NEXT_PUBLIC_API_URL + '/perfil', {
      headers: { 'Authorization': 'Bearer ' + token }
    })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        router.push('/login');
      } else {
        setPerfil(data);
        setForm(data);
      }
    });
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSave(e) {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/perfil', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setMsg('Perfil atualizado!');
    setPerfil(data);
  }

  if (!perfil) return <div className="text-center mt-10">Carregando...</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSave} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl mb-4 font-bold text-center">Meu Perfil</h1>
        <input name="nome" className="w-full mb-2 p-2 border rounded" value={form.nome || ''} onChange={handleChange} placeholder="Nome" />
        <input name="discord" className="w-full mb-2 p-2 border rounded" value={form.discord || ''} onChange={handleChange} placeholder="Discord" />
        <input name="youtube" className="w-full mb-2 p-2 border rounded" value={form.youtube || ''} onChange={handleChange} placeholder="Canal do YouTube" />
        <input name="time_id" className="w-full mb-2 p-2 border rounded" value={form.time_id || ''} onChange={handleChange} placeholder="ID do Time" />
        <input name="posicoes" className="w-full mb-4 p-2 border rounded" value={form.posicoes || ''} onChange={handleChange} placeholder="Posições (PV, GK, ...)" />
        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition" type="submit">Salvar</button>
        {msg && <div className="text-green-600 mt-2 text-center">{msg}</div>}
      </form>
    </div>
  );
}
