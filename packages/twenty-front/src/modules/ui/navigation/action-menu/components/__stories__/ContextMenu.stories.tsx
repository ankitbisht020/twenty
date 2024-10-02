import { Meta, StoryObj } from '@storybook/react';
import { useSetRecoilState } from 'recoil';
import { ComponentDecorator } from 'twenty-ui';

import { RecordTableScope } from '@/object-record/record-table/scopes/RecordTableScope';
import { MemoryRouterDecorator } from '~/testing/decorators/MemoryRouterDecorator';

import { contextMenuIsOpenState } from '../../states/contextMenuIsOpenState';
import { contextMenuPositionState } from '../../states/contextMenuPositionState';
import { ActionMenuDropdown } from '../ActionMenuDropdown';

const FilledContextMenu = () => {
  const setContextMenuPosition = useSetRecoilState(contextMenuPositionState);
  setContextMenuPosition({
    x: 100,
    y: 10,
  });
  const setContextMenuOpenState = useSetRecoilState(contextMenuIsOpenState);
  setContextMenuOpenState(true);
  return <ActionMenuDropdown />;
};

const meta: Meta<typeof ActionMenuDropdown> = {
  title: 'UI/Navigation/ContextMenu/ContextMenu',
  component: FilledContextMenu,
  decorators: [
    MemoryRouterDecorator,
    (Story) => (
      <RecordTableScope
        recordTableScopeId="companies"
        onColumnsChange={() => {}}
      >
        <Story />
      </RecordTableScope>
    ),
    ComponentDecorator,
  ],
  args: { selectedIds: ['TestId'] },
};

export default meta;
type Story = StoryObj<typeof ActionMenuDropdown>;

export const Default: Story = {};
