import Image from 'next/image'

export const Img = ({ children, width = 1125, height = 750, style = {} }) => (
  <div
    style={{
      boxShadow: '0px 0px 10px -10px rgba(0,0,0,0.75)',
      borderRadius: '10px',
      overflow: 'hidden',
      position: 'relative',
      ...style
    }}
  >
    <Image
      objectFit="cover"
      src="/images/color-bg.png"
      alt="Photo"
      width={width}
      height={height}
      layout="responsive"
      priority
    />
    <div
      style={{
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
      }}
    >
      {children}
    </div>
  </div>
)

export const Stroked = ({ children }) => (
  <div style={{ WebkitTextStroke: '1px white', fontWeight: 'bold' }}>
    {children}
  </div>
)

export const HelloText = ({ style = {} }) => (
  <>
    <h1 style={{ margin: 0, ...style }}>Привет</h1>
  </>
)
export const TryFixText = ({ style = {} }) => (
  <>
    <h1 style={{ margin: 0, ...style }}>Попытка исправить ситуацию</h1>
  </>
)

export const FinalText = ({ style = {} }) => (
  <>
    <h1 style={{ margin: 0, ...style }}>Спасибо за внимание</h1>
  </>
)
