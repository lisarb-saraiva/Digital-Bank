import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [termos, setTermos] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [dadosVisiveis, setDadosVisiveis] = useState(false); // Estado para controlar a visibilidade dos dados

  const progresso = () => {
    let preenchidos = 0;
    if (nome) preenchidos++;
    if (telefone) preenchidos++;
    if (email) preenchidos++;
    if (senha) preenchidos++;
    if (termos) preenchidos++;
    return (preenchidos / 5) * 100; // 5 campos no total
  };

  const handleAbrirConta = () => {
    if (progresso() === 100) {
      setDadosVisiveis(true);
    }
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    if (dadosVisiveis) setDadosVisiveis(false); // Esconde dados se algum campo for alterado
  };

  const handleCheckboxChange = (e) => {
    setTermos(e.target.checked);
    if (dadosVisiveis) setDadosVisiveis(false); // Esconde dados se checkbox for alterado
  };

  return (
    <div>
      <main className='flex'>
        {/* Lado esquerdo da pagina web */}
        <aside className="flex flex-column">
          <div className="flex flex-column">
            <div className="logo">
              <a href="/">
                <img src="./img/logo.svg" alt="Logo" />
              </a>
            </div>
            <div className="titulo">
              <h1>
                Complete os campos ao lado para abrir sua Conta Digital
              </h1>
              <p className="subtitulo">
                Aqui, você acontece com segurança e toda a praticidade que o Digital Bank oferece. Mais do que uma conta com cartão, você tem uma experiência completa com investimentos, Mimos exclusivos e muito mais.
              </p>
            </div>
            <footer>
              <small>
                &copy; Criado pelos alunos Karyna Rodrigues de Sousa e Antônio Lisarb Cordeiro Saraiva, inscritos nas matriculas 37021831 e 37021838, respectivamente.
              </small>
            </footer>
          </div>
        </aside>

        {/* Lado direito - Formulário */}
        <div className="flex flex-column">
          <div className="formulario flex flex-column">
            <div className="progresso">
              <label>Preencha os campos</label>
              <progress value={progresso()} max="100"></progress>
            </div>

            <div className="flex flex-column">
              <label htmlFor="nome">Digite seu nome</label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={handleInputChange(setNome)}
              />
            </div>

            <div className="flex flex-column">
              <label htmlFor="telefone">Digite seu telefone</label>
              <input
                type="text"
                id="telefone"
                value={telefone}
                onChange={handleInputChange(setTelefone)}
              />
            </div>

            <div className="flex flex-column">
              <label htmlFor="email">Digite seu e-mail</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={handleInputChange(setEmail)}
              />
            </div>

            <div className="flex flex-column">
              <label htmlFor="senha">Digite sua senha</label>
              <input
                type={mostrarSenha ? 'text' : 'password'}
                id="senha"
                value={senha}
                onChange={handleInputChange(setSenha)}
              />
              <button
                className="mostra-senha"
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                style={{ outline: 'none' }} // Remove a borda ao clicar
              >
                {mostrarSenha ? 'Ocultar senha' : 'Exibir senha'}
              </button>
            </div>

            <div className="flex termos">
              <input
                type="checkbox"
                name="aceita-termos"
                id="aceita-termos"
                checked={termos}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="aceita-termos">
                Eu li, estou ciente das condições de tratamento dos meus dados pessoais e dou meu consentimento, quando aplicável, conforme descrito nesta
              </label>
            </div>

            <div className="flex">
              <button className="botao" onClick={handleAbrirConta} disabled={progresso() < 100}>
                {progresso() < 100 ? 'Aceitar os termos' : 'Abrir minha conta'}
              </button>
            </div>

            {/* Exibir dados preenchidos */}
            {dadosVisiveis && (
              <div className="dados-preenchidos">
                <p>Olá, seja muito bem-vindo(a) {nome}, muito obrigado por abrir uma conta conosco, número para contato {telefone} e e-mail {email}.</p>
                {/* Senha não é exibida por segurança */}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}