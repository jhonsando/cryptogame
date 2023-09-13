import './styles.css';

const Content = ({ children }:{children:React.ReactNode}):JSX.Element => {
    return (<main role="main">
        <div className='centered-content'>
            {children}
        </div>
    </main>)
}

export default Content;