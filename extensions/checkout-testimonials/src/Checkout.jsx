import {
  reactExtension,
  BlockStack,
  View,
  Text,
  Heading,
  HeadingGroup,
  Image,
  Style,
  TextBlock
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {

  return (
    <View
      inlineAlignment='center'
    >
      <BlockStack inlineAlignment='center' maxInlineSize='fill'>
        <View inlineAlignment='center'>
          <TextBlock emphasis='bold' size='small' inlineAlignment='center'>
            More Than 1,000,000+ Decks Printed Worldwide
          </TextBlock>
          <HeadingGroup>
            <Heading level="1" inlineAlignment='center'>
              Loved By Everyone
            </Heading>
          </HeadingGroup>
          <TextBlock inlineAlignment='center'>
            Why not hear from some of our thousands of happy customers?
          </TextBlock>
        </View>
        <Image source='https://cdn.shopify.com/s/files/1/0041/7579/0209/files/any.svg' />
        <Image source='https://cdn.shopify.com/s/files/1/0041/7579/0209/files/plami.svg' />
        <Image source='https://cdn.shopify.com/s/files/1/0041/7579/0209/files/mark.svg' />
      </BlockStack>
    </View >
  );
}