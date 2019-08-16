import React, { useState } from 'react'; // eslint-disable-line
import {
  SidebarWrapper,
  SidebarItemHeader,
  SidebarItemContent,
  SidebarItemWrapper,
  SidebarItemContentWrapper,
  SidebarItemIcon,
} from './styles';

const SidebarItem = props => {
  const { children = 'Content', title } = props;
  const [expanded, setExpanded] = useState(false);

  const onToggleExpandedBlock = () => setExpanded(expanded => !expanded);

  return (
    <SidebarItemWrapper>
      <SidebarItemHeader onClick={onToggleExpandedBlock}>
        {title}
        <SidebarItemIcon
          expanded={expanded}
          src="/static/icons/arrow-right.svg"
          alt="icon"
        ></SidebarItemIcon>
      </SidebarItemHeader>
      <SidebarItemContent expanded={expanded}>
        <SidebarItemContentWrapper>{children}</SidebarItemContentWrapper>
      </SidebarItemContent>
    </SidebarItemWrapper>
  );
};

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <SidebarItem title="Saved items"></SidebarItem>
      <SidebarItem title="Molecule search"></SidebarItem>
      <SidebarItem title="Query search"></SidebarItem>
    </SidebarWrapper>
  );
}
