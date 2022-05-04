import React from "react";
import { Box } from "../../components/common-components/Box/Box";
import { Image } from "../../components/common-components/Image/Image";
import { ThirdLevelHeading } from "../../components/common-components/TirdLevelHeading/ThirdLevelHeading";
import { Paragraph } from "../../components/common-components/Paragraph/Paragraph";
import { COLOR } from "../../constants/color-constants"
import {FlexBox} from "../../components/common-components/FlexBox/FlexBox";
import { Button } from "../../components/common-components/Button/Button";
import { Span } from "../../components/common-components/Span/Span";

interface IProductCard {
    margin?: string;
    src?: string;
}

export const ProductCard = ({ margin, src }: IProductCard) => {
    return (
        <Box
            margin={margin}
            padding="0 18px"
            width={100}
        >
            <Image margin="0 0 30px" src={require(`../../assets/img/${src}.png`)}></Image>
            <ThirdLevelHeading
                margin="0 0 30px"
                fontSize="24"
                lineHeight="30"
            >
                Саламон сет
            </ThirdLevelHeading>
            <Paragraph
                fontWeight="400"
                color={COLOR.silverGray}
                margin="0 0 20px"
            >
                1050 грамм, 30 кусочков
            </Paragraph>
            <FlexBox
                padding="11px 0 10px 0"
                borderTop={`1px solid 
                ${COLOR.silverGray}`}
                justifyContent="space-between"
            >
                <Span
                    fontSize="24"
                    lineHeight="30"
                    fontWeight="700"
                >
                    1500 COM
                </Span>
                <Button>Хочу!</Button>
            </FlexBox>
        </Box>
    )
}