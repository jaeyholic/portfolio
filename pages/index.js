import { Box, Heading, Text } from '@chakra-ui/core';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';

const MotionBox = motion.custom(Box);
const MotionHeading = motion.custom(Heading);
const MotionText = motion.custom(Text);

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const variants = {
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const child = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Homepage</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box p={{ md: 20 }}>
        <AnimatePresence>
          <Box w={{ md: '140' }} pos='relative' zIndex={10}>
            <MotionHeading
              as='h1'
              fontWeight={900}
              fontSize={{ md: '8xl' }}
              fontFamily='heading'
              lineHeight='1.1'
              variants={variants}
            >
              <MotionText variants={child}>Hey there *waves*,</MotionText>
              <MotionText variants={child}>I'm Felix Yeboah -</MotionText>
              <MotionText variants={child}>Jefferson, UI designer,</MotionText>
              <MotionText variants={child}>a developer and a nomad.</MotionText>
            </MotionHeading>

            <Text fontWeight={300} fontSize={{ md: '2xl' }} mt={{ md: 10 }}>
              A self-taught Full-Stack Developer & Design-Minded, focused on
              building beautiful interfaces & experiences👨‍💻. My inbox is always
              open for any opportunities, whether for a potential project or
              just to say hi, I'll try my best to answer your email!
            </Text>
            {/* <ProjectCard /> */}
          </Box>
        </AnimatePresence>
      </Box>
    </Box>
  );
}
