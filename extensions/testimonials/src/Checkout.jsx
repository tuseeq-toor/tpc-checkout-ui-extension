import {
  reactExtension,
  BlockStack,
  View,
  Text,
  Heading,
  HeadingGroup,
  Image,
  Style,
  TextBlock,
  useSettings
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {

  const { saleText, subHeadline1, subHeadline2, mainHeadline } = useSettings();

  const sale = saleText ?? '25% OFF BLACK FRIDAY SALE USE CODE: CONVOSALE';
  const firstHeadline = subHeadline1 ?? 'More Than 1,000,000+ Decks Printed Worldwide';
  const secondHeadline = subHeadline2 ?? 'Why not hear from some of our thousands of happy customers?';
  const mainHead = mainHeadline ?? 'Loved By Everyone';

  return (
    <View
      inlineAlignment='center'
    >
      <BlockStack inlineAlignment='center' maxInlineSize='fill'>
        <View inlineAlignment='center'>
          <TextBlock emphasis='bold' size='large' inlineAlignment='center' appearance='critical'>
            {sale}
          </TextBlock>
          <TextBlock emphasis='bold' size='small' inlineAlignment='center'>
            {firstHeadline}
          </TextBlock>
          <HeadingGroup>
            <Heading level="1" inlineAlignment='center'>
              {mainHead}
            </Heading>
          </HeadingGroup>
          <TextBlock inlineAlignment='center'>
            {secondHeadline}
          </TextBlock>
        </View>
        <Image source='https://cdn.shopify.com/s/files/1/0041/7579/0209/files/any.svg' />
        <Image source='https://cdn.shopify.com/s/files/1/0041/7579/0209/files/plami.svg' />
        <Image source='https://cdn.shopify.com/s/files/1/0041/7579/0209/files/mark.svg' />
      </BlockStack>
    </View >
  );
}