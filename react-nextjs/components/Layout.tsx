import React, {ReactNode} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {AppBar, Toolbar, Typography, Button, MenuItem} from '@mui/material';

type Props = {
    children?: ReactNode
    title?: string
}

const estiloLinks = {
    textDecoration: 'none',
    color: 'white'
}
const Layout = ({children, title = 'This is the default title'}: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <header>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Mi sitio web
                    </Typography>
                    <Button color="inherit">
                        <Link style={estiloLinks} href="/punto1">Punto 14.2.1</Link>
                    </Button>

                    <Button color="inherit">
                        <Link style={estiloLinks}  href="/punto2">Punto 14.2.2</Link>
                    </Button>
                    <Button color="inherit">
                        <Link style={estiloLinks} href="/punto3">Punto 14.2.3</Link>
                    </Button>
                    <Button color="inherit">
                        <Link style={estiloLinks} href="/punto4">Punto 14.2.4</Link>
                    </Button>
                    <Button color="inherit">
                        <Link style={estiloLinks} href="/punto5">Punto 14.2.5</Link>
                    </Button>
                    <Button color="inherit">
                        <Link style={estiloLinks} href="/punto6">Punto 14.2.6</Link>
                    </Button>
                    <Button color="inherit">
                        <Link style={estiloLinks} href="/punto7">Punto 14.2.7</Link>
                    </Button>
                    <Button color="inherit">
                        <Link style={estiloLinks} href="/punto8">Punto 14.2.8</Link>
                    </Button>
                    <Button color="inherit">
                        <Link style={estiloLinks} href="/punto9">Punto 14.2.9</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </header>
        {children}

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
                crossOrigin="anonymous"></script>

    </div>
)

export default Layout
