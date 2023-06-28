import React from 'react'
import Avatar from '@mui/material/Avatar';
import logo from '../media/logo.png'
import Typography from '@mui/material/Typography';
import { purple } from '@mui/material/colors';

const About = () => {
  return (
    <><Avatar variant='rounded' alt="logo" src={logo} sx={{ width: 160, height: 160 }} /><Typography variant="body2" color={purple[900]}>
About Me

I am currently on a graduate Software Development course with Code Institute, with a view to specialise in advanced full stack development for my final project. Here you will find links to my coursework, hackathon, personal and commercial projects. This site is a living portfolio and as such is a work in progress.
</Typography></>
  )
}

export default About