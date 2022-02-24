import React, { useContext } from 'react'
import { Text, ScrollView } from 'react-native'
import StyleComponent from '../styles/css'
import MenuBlock from './components/Menu'
import { RoutesContext } from '../Context'

const MainSection = StyleComponent.MainSection;
const Header = StyleComponent.Header;
const HeaderUser = StyleComponent.HeaderUser;
const Content = StyleComponent.NearMeets.Content;
const Bio = StyleComponent.NearMeetOne.Bio;
const BioAvatar = StyleComponent.NearMeetOne.BioAvatar;
const BioDescription = StyleComponent.NearMeetOne.BioDescription;
const BioDescriptionDialog = StyleComponent.NearMeetOne.BioDescriptionDialog;
const ButtonsGroup = StyleComponent.MyMeetPage.ButtonsGroup;
const ButtonAdd = StyleComponent.MyMeetPage.ButtonAdd;
const ButtonSkip = StyleComponent.MyMeetPage.ButtonSkip;
const BackButton = StyleComponent.NearMeetOne.BackButton;

export default function MyMeetPage() {

  const [ ,setRoute ] = useContext(RoutesContext)

  return (
    <MainSection
      style={{
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    > 

      <Header>
        <Text 
          style={{ 
            fontSize: 22, 
            fontWeight: 'bold',
            letterSpacing: 1,
            marginBottom: 4 
          }}
        >
            
          metoo
          
        </Text>
        <HeaderUser/>
      </Header>

      <Content>
        <ScrollView>

          <Bio>

            <BioAvatar/>
            <BioDescription>
              <BioDescriptionDialog>
                <Text style={{ color: 'white' }}>meet status</Text>
              </BioDescriptionDialog>
              <Text
                style={{
                  color: 'grey',
                  marginLeft: 16
                }}
              >
                
                meet name
                
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 15,
                  marginTop: 4,
                  fontWeight: 'bold',
                }}
              >
                
                NIK SHIPOV
                
              </Text>
            </BioDescription>
          
          </Bio>

          <ButtonsGroup>

            <ButtonAdd>
              <Text style={{ color: 'white', fontSize: 15 }}>добавить</Text>
            </ButtonAdd>
            <ButtonSkip>
              <Text style={{ color: 'white', fontSize: 15 }}>отклонить</Text>
            </ButtonSkip>

          </ButtonsGroup>
          <BackButton onTouchStart={() => setRoute('my-meets')}>
            <Text style={{ color: 'white', fontSize: 15 }}>вернуться к списку</Text>
          </BackButton>

          <Text 
            style={{ 
              height: 10, 
              opacity: 0
            }}
          />

        </ScrollView>
      </Content>

      <MenuBlock/>

    </MainSection>
  );
}
