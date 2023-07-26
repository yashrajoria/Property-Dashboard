import { useList } from '@pankod/refine-core'
import {
    PieChart, PropertyReferrals, TotalRevenue, PropertyCard, TopAgent
} from 'components'
import { Box, Typography, Stack } from '@pankod/refine-mui'

// import {useList}
const Home = () => {
    const { data, isLoading, isError } = useList({
        resource: 'properties',
        config: {
            pagination: {
                pageSize: 5,
            }
        }
    })

    const latestProperties = data?.data ?? {};
    console.log(latestProperties)

    if (isLoading)
        return <Typography>Loading...</Typography>

    if (isError)
        return <Typography>Error...</Typography>


    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142D">
                Dashboard
            </Typography>
            <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
                <PieChart
                    title="Properties for Sale"
                    value={684}
                    series={[75, 25]}
                    colors={['#475be8', '#ff99cc']} />


                <PieChart
                    title="Properties for Rent"
                    value={550}
                    series={[60, 40]}
                    colors={['#475ae8', '#ff99cc']} />


                <PieChart
                    title="Total Customers"
                    value={5684}
                    series={[75, 25]}
                    colors={['#275be8', '#ff99cc']} />


                <PieChart
                    title="Total Cities"
                    value={555}
                    series={[75, 25]}
                    colors={['#475be8', '#ff99cc']} />

            </Box>

            <Stack gap={4} mt="25px" width="100%"
                direction={{ xs: 'column', lg: 'row' }}>
                <TotalRevenue />
                <PropertyReferrals />
            </Stack>
            <Box
                flex={1}
                borderRadius="15px"
                padding="20px"
                bgcolor="beige"
                display="flex"
                flexDirection="column"
                minWidth="100%"
                mt="10px"
            >
                <Typography
                    fontSize="18px"
                    fontWeight={600}
                    color="#11142d"
                >
                    Latest Properties
                </Typography>
                <Box mt={2.5} sx={{
                    display: "flex", flexWrap: 'wrap', gap: 4
                }}>
                    {/* {latestProperties.map((property) => {
                        <PropertyCard
                            key={property._id}
                            id={property._id}
                            title={property.title}
                            location={property.location}
                            price={property.price}
                            photo={property.photo}
                        />
                    })} */}


                </Box>
            </Box>
        </Box>
    )
}

export default Home