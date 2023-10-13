// Vamos começar com os objetos materiais.

// Objeto Computador
function Computador(marca, modelo, sistemaOperacional) {
    this.marca = marca; 
    this.modelo = modelo; 
    this.sistemaOperacional = sistemaOperacional; 
    this.ligado = false;
    this.programa = null;

    this.ligar = function() {
      this.ligado = true;
      console.log("O computador está ligado.");
    };
    
    this.desligar = function() {
      this.ligado = false;
      this.programa = null;
      console.log("O computador está desligado.");
    };
    
    this.executarSoftware = function(programa) {
      if (this.ligado) {
        this.programa = programa;
        console.log("Abrindo o programa " + programa);
      } else {
        console.log("O computador está desligado. Ligue o computador antes de abrir um programa.");
      }
    };
  }
  
  // Exemplo de uso do objeto Computador
  const meuComputador = new Computador("Dell", "XPS 15", "Windows 10");
  meuComputador.ligar();
  meuComputador.executarSoftware("Visual Studio Code");
  meuComputador.desligar();
  
  // Definição do objeto Smartphone
  function Smartphone(marca, modelo, sistemaOperacional) { 
    this.marca = marca;
    this.modelo = modelo;
    this.sistemaOperacional = sistemaOperacional;
    this.ligado = false;

    this.ligar = function() {
      this.ligado = true;
      console.log("O smartphone está ligado.");
    };
    
    this.desligar = function() {
      this.ligado = false;
      console.log("O smartphone está desligado.");
    };
    
    this.enviarMensagem = function(destinatario, mensagem) {
      if (this.ligado) {
        console.log("Enviando mensagem para " + destinatario + ": " + mensagem);
      } else {
        console.log("O smartphone está desligado. Ligue o smartphone antes de enviar uma mensagem.");
      }
    };
  }
  
  // Exemplo de uso do objeto Smartphone
  const meuSmartphone = new Smartphone("Apple", "iPhone 13", "iOS");
  meuSmartphone.ligar();
  meuSmartphone.enviarMensagem("Breno", "Olá, vai ter aula de JavaScript amanhã?");
  meuSmartphone.desligar();

//
//
//

// Objetos abstratos.

// Definição do objeto Conta de Usuário
function ContaUsuario(nomeDeUsuario, email) { 
    this.nomeDeUsuario = nomeDeUsuario;
    this.email = email;
    this.dataDeRegistro = new Date();
    this.logado = false;
 
    this.fazerLogin = function() {
      this.logado = true;
      console.log("Usuário " + this.nomeDeUsuario + " fez login.");
    };
    
    this.alterarSenha = function(novaSenha) {
      console.log("Senha da conta de " + this.nomeDeUsuario + " alterada para " + novaSenha);
    };
    
    this.logoff = function() {
      console.log("Conta de " + this.nomeDeUsuario + " deslogou.");
    };
  }
  
  // Exemplo de uso do objeto Conta de Usuário
  const minhaConta = new ContaUsuario("João Alberto", "joaoalberto@email.com.br");
  minhaConta.fazerLogin();
  minhaConta.alterarSenha("123456");
  minhaConta.logoff();
  
  // Definição do objeto Postagem de Rede Social
  function PostagemRedeSocial(autor, conteudo) {
    this.autor = autor;
    this.conteudo = conteudo;
    this.dataDePublicacao = new Date();
    
    this.editarPostagem = function(novoConteudo) {
      this.conteudo = novoConteudo;
      console.log("Postagem de " + this.autor + " editada: " + novoConteudo);
    };
    
    this.compartilhar = function() {
      console.log("Postagem de " + this.autor + " compartilhada nas redes sociais.");
    };
    
    this.excluirPostagem = function() {
      console.log("Postagem de " + this.autor + " excluída.");
    };
  }
  
  // Exemplo de uso do objeto Postagem de Rede Social
  const minhaPostagem = new PostagemRedeSocial("João Alberto", "Minha primeira postagem!");
  minhaPostagem.editarPostagem("Editei minha postagem!");
  minhaPostagem.compartilhar();
  minhaPostagem.excluirPostagem();