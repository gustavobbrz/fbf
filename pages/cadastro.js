import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Cadastro() {
  const [form, setForm] = useState({ nome: '', email: '', senha: '', senha2: '' });
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');
  const router = useRouter();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setMsg('');
    if (form.senha !== form.senha2) {
      setError('As senhas não coincidem!');
      return;
    }
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome: form.nome, email: form.email, senha: form.senha, cargo_id: 3 }) // 3 = jogador
    });
    const data = await res.json();
    if (data.id) {
      // Automatic login after registration
      try {
        const loginRes = await fetch(process.env.NEXT_PUBLIC_API_URL + '/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: form.email, senha: form.senha }),
        });
        const loginData = await loginRes.json();
        if (loginData.token) {
          localStorage.setItem('token', loginData.token);
          router.push('/perfil');
        } else {
          setMsg('Conta criada, mas houve um problema ao logar automaticamente. Faça login manualmente.');
          setTimeout(() => router.push('/login'), 2000);
        }
      } catch (err) {
        setMsg('Conta criada, mas erro ao logar automaticamente. Faça login manualmente.');
        setTimeout(() => router.push('/login'), 2000);
      }
    } else {
      setError(data.error || 'Erro ao criar conta');
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-sm border border-yellow-600">
        <h1 className="text-3xl mb-4 font-extrabold text-center text-white">Criar Conta</h1>
        <input className="w-full mb-2 p-2 border border-yellow-600 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400" name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
        <input className="w-full mb-2 p-2 border border-yellow-600 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400" name="email" placeholder="Email" value={form.email} onChange={handleChange} type="email" required />
        <input className="w-full mb-2 p-2 border border-yellow-600 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400" name="senha" placeholder="Senha" value={form.senha} onChange={handleChange} type="password" required />
        <input className="w-full mb-4 p-2 border border-yellow-600 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400" name="senha2" placeholder="Repita a senha" value={form.senha2} onChange={handleChange} type="password" required />
        <button className="w-full bg-yellow-500 text-gray-900 p-2 rounded hover:bg-yellow-600 transition font-semibold" type="submit">Criar Conta</button>
        {error && <div className="text-red-400 mt-2 text-center">{error}</div>}
        {msg && <div className="text-green-400 mt-2 text-center">{msg}</div>}
        <div className="mt-4 text-center">
          <a href="/login" className="text-yellow-400 hover:underline">Já tem conta? Entrar</a>
        </div>
      </form>
    </div>
  );
}
