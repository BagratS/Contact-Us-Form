import { Card } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

function CustomCard(props: PropsWithChildren) {
    return <Card textAlign="left" p={4} mr={4}>{props.children}</Card>
}

export default CustomCard;