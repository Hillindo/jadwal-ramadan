import {Flex,Container,Grid,Box} from "@mantine/core";
import { useEffect, useState } from 'react';
import {fetchDataCombined} from "../calendar/api";


export default function Page(){

    return(
        <>
            <Container w="100%">
                <Flex gap="2px">
                    <Box ta="center" w="10%" bg="red">
                        
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        Jakarta
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        Surabaya
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        Gresik
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        Jember
                    </Box>
                </Flex>
            </Container>
            <Container w="100%" mt="5px">
                <Flex gap="2px">
                    <Box ta="center" w="10%" bg="red">
                        Imsak
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        01:00
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        02:00
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        03:00
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        04:00
                    </Box>
                </Flex>
            </Container>
            <Container w="100%" mt="5px">
                <Flex gap="2px">
                    <Box ta="center" w="10%" bg="red">
                        Subuh
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        01:00
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        02:00
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        03:00
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        03:00
                    </Box>
                </Flex>
            </Container>
            <Container w="100%" mt="5px">
                <Flex gap="2px">
                    <Box ta="center" w="10%" bg="red">
                        Dzuhur
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        01:00
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        02:00
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        03:00
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        03:00
                    </Box>
                </Flex>
            </Container>
            <Container w="100%" mt="5px">
                <Flex gap="2px">
                    <Box ta="center" w="10%" bg="red">
                        Ashar
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        01:00
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        02:00
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        value
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        value
                    </Box>
                </Flex>
            </Container>
            <Container w="100%" mt="5px">
                <Flex gap="2px">
                    <Box ta="center" w="10%" bg="red">
                        Maghrib
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        value
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        value
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        value
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        value
                    </Box>
                </Flex>
            </Container>
            <Container w="100%" mt="5px">
                <Flex gap="2px">
                    <Box ta="center" w="10%" bg="red">
                        Isya
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        value
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        value
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        value
                    </Box>
                    <Box ta="center" w="10%" bg="red">
                        value
                    </Box>
                </Flex>
            </Container>
        </>
    )
}