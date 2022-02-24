import React, { useState, useContext } from 'react'
import { Text, ScrollView, Pressable } from 'react-native'
import StyleComponent from '../styles/css'
import MenuBlock from './components/Menu'
import { RoutesContext } from '../Context'

const MainSection = StyleComponent.MainSection;
const Content = StyleComponent.MainPage.Content;
const ContentAvatar = StyleComponent.MainPage.ContentAvatar;
const ContentAvatarIcons = StyleComponent.MainPage.ContentAvatarIcons;
const ContentAvatarIcon = StyleComponent.MainPage.ContentAvatarIconsIcon;
const ContentItems = StyleComponent.MainPage.ContentItems;
const ContentItemsButton = StyleComponent.MainPage.ContentItemsButton;

export default function MainPage() {

  const [ ,setRoute ] = useContext(RoutesContext)
  const [ opacity1, setOpacity1 ] = useState(1)
  const [ opacity2, setOpacity2 ] = useState(1)
  const [ opacity3, setOpacity3 ] = useState(1)

  return (
    <MainSection
      style={{
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    > 

      <Content>
        <ScrollView>

          <ContentAvatar>
          <ContentAvatarIcons
            style={{
              marginTop: 40,
              marginLeft: -22
            }}
          >
              <ContentAvatarIcon>
                <Pressable
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    left: 0,
                    top: 0,
                    zIndex: 10
                  }}
                  onPress={() => setRoute('my-meets')}
                />
              </ContentAvatarIcon>
            </ContentAvatarIcons>
            <ContentAvatarIcons>
              <ContentAvatarIcon>
                <Pressable
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    left: 0,
                    top: 0,
                    zIndex: 10
                  }}
                  onPress={() => setRoute('my-page')}
                />
              </ContentAvatarIcon>
            </ContentAvatarIcons>
          </ContentAvatar>
          <Text 
            style={{ 
              textAlign: 'center',
              marginTop: 24,
              marginBottom: 26
            }}
          >
            
            NIK SHIPOV
            
          </Text>
          <ContentItems>

            <ContentItemsButton
              opacity={opacity1}
              onTouchStart={() => {
                setOpacity1(0.8)
                setRoute('near-meets')
              }}
              onTouchEnd={() => setOpacity1(1)}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 13
                }}
              >
                meets near me
              </Text>
            </ContentItemsButton>
            <ContentItemsButton
              opacity={opacity2}
              onTouchStart={() => {
                setOpacity2(0.8)
                setRoute('contacts')
              }}
              onTouchEnd={() => setOpacity2(1)}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 13
                }}
              >
                my contacts
              </Text>
            </ContentItemsButton>
            <ContentItemsButton 
              style={{ marginBottom: 0 }}
              opacity={opacity3}
              onTouchStart={() => {
                setOpacity3(0.8)
                setRoute('main')
              }}
              onTouchEnd={() => setOpacity3(1)}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 13
                }}
              >
                create new meet
              </Text>
            </ContentItemsButton>

          </ContentItems>

        </ScrollView>
      </Content>

      <MenuBlock/>

    </MainSection>
  );
}
