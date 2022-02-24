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
const AddMeetButton = StyleComponent.NearMeetOne.AddMeetButton;
const BackButton = StyleComponent.NearMeetOne.BackButton;

export default function MyContactPage() {

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
              <BioDescriptionDialog onTouchStart={() => setRoute('my-contact-visit-card')}>
                <Text style={{ color: 'white' }}>открыть визитку</Text>
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

          <AddMeetButton onTouchStart={() => setRoute('contacts')}> 

            <Text style={{ color: 'white', fontSize: 15 }}>обратно к списку</Text>
          
          </AddMeetButton>
          <BackButton>
            
            <Text style={{ color: 'white', fontSize: 15 }}>удалить из контактов</Text>
          
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
