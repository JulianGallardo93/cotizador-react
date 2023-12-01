import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: white;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Imagen = styled.img`
    display: block;
    width: 100px;
`

const Texto = styled.p`
    font-size: 18px;
    
    span{
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`
const Resultado = ({resultado}) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGE24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Contenedor>
        <Imagen src={`https://www.cryptocompare.com/${IMAGEURL}`} alt="imagen criptomoneda"/>
        <div>
        <Precio>El Precio es de : <span>{PRICE}</span></Precio>
        <Texto>El Precio mas alto : <span>{HIGHDAY}</span></Texto>
        <Texto>El Precio mas bajo : <span>{LOWDAY}</span></Texto>
        <Texto>En 24h ha variado : <span>{CHANGE24HOUR}</span></Texto>
        <Texto>Ultima Actualizacion : <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado
