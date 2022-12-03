import styled from 'styled-components'

export const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border-radius: ${p => p.theme.radii.round};
`

export const Name = styled.p`
    font-size: ${p => p.theme.fontSizes.l};
    color: ${p => p.theme.colors.secondary};;

    margin-top: ${p => p.theme.space[0]};
    margin-bottom: ${p => p.theme.space[0]};
`
export const Tag = styled.p`
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.text};

    margin-top: ${p => p.theme.space[3]};
    margin-bottom: ${p => p.theme.space[0]}; 
`
export const Location = styled.p`
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.text};

    margin-top: ${p => p.theme.space[3]};
    margin-bottom: ${p => p.theme.space[0]}; 
`
export const Label = styled.span`
    display: flex;

    color: ${p => p.theme.colors.text};
`
export const Quantity = styled.span`
    color: ${p => p.theme.colors.secondary};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};
`
