import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    setError('');
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha }),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      router.push('/perfil');
    } else {
      setError(data.error || 'Erro ao logar');
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-sm border border-yellow-600">
        <h1 className="text-3xl mb-4 font-extrabold text-center text-white">Entrar na FBF</h1>
        <input className="w-full mb-2 p-2 border border-yellow-600 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="w-full mb-4 p-2 border border-yellow-600 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400" type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
        <button className="w-full bg-yellow-500 text-gray-900 p-2 rounded hover:bg-yellow-600 transition font-semibold" type="submit">Entrar</button>
        {error && <div className="text-red-400 mt-2 text-center">{error}</div>}
        <div className="mt-4 text-center">
          <a href="/cadastro" className="text-yellow-400 hover:underline">Não tem conta? Criar agora</a>
        </div>
      </form>
    </div>
  );
}
