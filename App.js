import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Share from 'react-native-share';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png'),
      mostrarCompartilhar: false,
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.compartilharMensagem = this.compartilharMensagem.bind(this);

    this.frases = [
      'A vida trará coisas boas se tiver paciência.',  
      'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',  
      'Não compense na ira o que lhe falta na razão.',  
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',  
      'A maior de todas as torres começa no solo.',  
      'Não há que ser forte. Há que ser flexível.',  
      'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',  
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',  
      'A juventude não é uma época da vida, é um estado de espírito.',  
      'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',  
      'Dê toda a atenção à formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',  
      'Siga os bons e aprenda com eles.',  
      'Não importa o tamanho da montanha, ela não pode tapar o sol.',  
      'O bom-senso vale mais do que muito conhecimento.',  
      'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',  
      'São os nossos amigos que nos ensinam as mais valiosas lições.',  
      'Aquele que se importa com o sentimento dos outros, não é um tolo.',  
      'A adversidade é um espelho que reflete o verdadeiro eu.',  
      'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',  
      'Uma bela flor é incompleta sem as suas folhas.',  
      'Sem o fogo do entusiasmo, não há o calor da vitória.',  
      'O riso é a menor distância entre duas pessoas.',  
      'Os defeitos são mais fortes quando o amor é fraco.',  
      'Amizade e Amor são coisas que se unem num piscar de olhos.',  
      'Surpreender e ser surpreendido é o segredo do amor.',  
      'Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.',  
      'A paciência na adversidade é sinal de um coração sensível.',  
      'A sorte favorece a mente bem preparada.',  
      'A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.',  
      'Quem olha para fora sonha; quem olha para dentro acorda.',  
      'As pessoas esquecerão o que você disse e o que você fez… mas nunca esquecerão como se sentiram.',  
      'Espere pelo mais sábio dos conselhos: o tempo.',  
      'Todas as coisas são difíceis antes de se tornarem fáceis.',  
      'Se você se sente só é porque construiu muros ao invés de pontes.',  
      'Vencer é 90 por cento suor e 10 por cento de engenho.',  
      'O amor está sempre mais próximo do que você imagina.',  
      'Você é do tamanho do seu sonho.',  
      'Pare de procurar eternamente; a felicidade está mesmo aqui ao seu lado.',  
      'O conhecimento é a única virtude e a ignorância é o único vício.',  
      'O nosso primeiro e último amor é… o amor-próprio.',  
      'Deixe de lado as preocupações e seja feliz.',  
      'A vontade das pessoas é a melhor das leis.',  
      'Nós somos o que pensamos.',  
      'A maior barreira para o sucesso é o medo do fracasso.',  
      'O pessimista vê a dificuldade em cada oportunidade; o otimista vê a oportunidade em cada dificuldade.',  
      'Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram o seu trabalho.',  
      'O insucesso é apenas uma oportunidade para recomeçar de novo com mais experiência.',  
      'Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.',  
      'O verdadeiro homem mede a sua força, quando se defronta com o obstáculo.',  
      'Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.',  
      'A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas.',  
      'Motivação não é sinónimo de transformação, mas um passo em sua direção.',  
      'O que empobrece o ser humano não é a falta de dinheiro, mas sim a falta de fé, motivação e criatividade.',  
      'A inspiração vem dos outros. A motivação vem de dentro de nós.',  
      'Não acredite mais em pessoas especiais, mas em momentos especiais com pessoas normais.',  
      'A nossa vida tem 4 sentidos… Amar, Sofrer, Lutar e Vencer. Ame muito, sofra pouco, lute bastante e vença sempre!',  
      'Nada é por acaso… Acredite em seus sonhos e nos seus potenciais… Na vida tudo se supera.',  
      'Acredite em milagres, mas não dependa deles.',  
      'Você sempre será a sua melhor companhia!',  
      'Realize o óbvio, pense no improvável e conquiste o impossível.'  
    ];
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: `"${this.frases[numeroAleatorio]}"`,
      img: require('./src/biscoitoAberto.png'),
      mostrarCompartilhar: true,
    });
  }

  compartilharMensagem = async () => {
    this.viewShot.capture().then(async (uri) => {
      const base64 = await RNFS.readFile(uri, 'base64');
      const options = {
        title: 'Biscoito da Sorte 🍀',
        message: this.state.textoFrase,
        url: `data:image/png;base64,${base64}`, // Compartilha a imagem capturada
      };

      await Share.open(options);
    }).catch(error => console.log('Erro ao capturar a tela:', error));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30, marginBottom: 20, color: '#dd7b22', fontWeight: 'bold' }}>
          Biscoito da Sorte 🍀
        </
        Text>
        {/* Captura da área contendo a imagem e a frase */}
        <ViewShot ref={(ref) => (this.viewShot = ref)} options={{ format: 'png', quality: 0.9 }}>
          <View style={styles.content}>
            <Image source={this.state.img} style={styles.img} />
            {this.state.textoFrase !== '' && (
              <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
            )}
          </View>
        </ViewShot>

        {/* Botão para quebrar o biscoito */}
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>

        {/* Botão para compartilhar */}
        {this.state.mostrarCompartilhar && (
          <TouchableOpacity onPress={this.compartilharMensagem} style={styles.compartilharBtn}>
            <Image source={require('./src/compartilhar.png')} style={styles.imgCompartilhar} />
            <Text style={styles.compartilharTexto}>Compartilhar</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Fundo branco para melhor captura
    padding: 20,
    borderRadius: 10,
    //elevation: 3, // Sombra para destacar a imagem capturada
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    marginTop: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
    marginTop: 10,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
  compartilharBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#dd7b22',
    borderRadius: 10,
  },
  imgCompartilhar: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  compartilharTexto: {
    fontSize: 16,
    color: '#fff',
  },
});
