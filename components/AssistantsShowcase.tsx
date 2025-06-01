
import React from 'react';
import { ASSISTANTS_DATA } from '../constants';
import AssistantDisplay from './AssistantDisplay';

interface AssistantsShowcaseProps {
  id: string;
}

const AssistantsShowcase: React.FC<AssistantsShowcaseProps> = ({ id }) => {
  return (
    <div id={id} className="relative">
      {ASSISTANTS_DATA.map((assistant, index) => (
        <AssistantDisplay key={assistant.id} assistant={assistant} />
      ))}
    </div>
  );
};

export default AssistantsShowcase;
