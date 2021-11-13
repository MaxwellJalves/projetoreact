
import {
 Containner,
 Header,
Icon,
Input,
GroupCard,
CardLeft,
CardCenter,
CardRight,
} from '../styles/Layout'

import IconHome from './assets/images/home.svg';
import IconPeople from './assets/images/people.svg';
import IconSearch from './assets/images/search.svg';
import IconWork from './assets/images/work.svg';

export function LayoutLinkedin(){
    return (
        <div>
        <Containner>
          <Header>
            <Icon type={IconSearch} />
            <Input type="text" />
            <Icon type={IconHome} />
            <Icon type={IconPeople} />
            <Icon type={IconWork} />
          </Header>
          ola
        </Containner>
        <GroupCard>
          <CardLeft children="Componentizar" />
          <CardCenter children="Adicionar Cards" />
          <CardRight children="Componentizar" />
        </GroupCard>
    
      </div>
    )
   
}