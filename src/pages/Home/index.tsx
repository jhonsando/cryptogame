import Content from 'components/Content'

const Home = ():JSX.Element => {
  return (
    <Content>
        <article aria-labelledby="history-heading">
          <h2 id="history-heading" role='heading'>History</h2> 
          <p>
          The Caesar Cipher is one of the earliest known cryptographic systems. Julius Caesar used a cipher that shifts the letters in the alphabet in place by three and wrapping the remaining letters to the front to write to Marcus Tullius Cicero in approximately 50 BC.
          Historical pen and paper ciphers used in the past are sometimes known as classical ciphers. They include simple substitution ciphers (such as ROT13) and transposition ciphers (such as a Rail Fence Cipher). For example, "GOOD DOG" can be encrypted as "PLLX XLP" where "L" substitutes for "O", "P" for "G", and "X" for "D" in the message. Transposition of the letters "GOOD DOG" can result in "DGOGDOO". These simple ciphers and examples are easy to crack, even without plaintext-ciphertext pairs.
          </p>
        </article>
        <article aria-labelledby="simple-cipher-explanation-heading">
          <h2 id="simple-cipher-explanation-heading"  role='heading'>Cipher algorythm</h2>
          <p>For further explanation please visit <a target='_blank' aria-label='Simple cipher algorithm explanation' href='https://www.geeksforgeeks.org/caesar-cipher-in-cryptography/'>Simple cipher algorythm explanation</a></p>
        </article>
        <article aria-labelledby="cipher-vigenere-explanation-heading">
            <h2 id="cipher-vigenere-explanation-heading"  role='heading'>Cipher vigenere algorythm</h2>
            <p>For further explanation please visit <a target='_blank' aria-label='cipher vigenere algorithm explanation' href=''>cipher vigenere algorythm explanation</a></p>
        </article>
    </Content>
  );
}

export default Home;