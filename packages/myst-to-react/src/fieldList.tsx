import React from 'react';
import type { NodeRenderer } from '@myst-theme/providers';
import type { GenericNode } from 'myst-common';
import { MyST } from './MyST.js';

type FieldList = {
  type: 'fieldList';
  title?: string;
};

type Field = {
  type: 'field';
  field_name: string;
};

export const FieldListRenderer: NodeRenderer<FieldList> = ({ node }) => {
  const fields = node.children as (GenericNode & Field)[];
  return (
    <div className="field-list">
      {node.title && <div className="field-list-title">{node.title}</div>}
      <div className="field-list-grid">
        {fields.map((field, i) => (
          <React.Fragment key={i}>
            <div className="field-list-label">{field.field_name}</div>
            <div className="field-list-value">
              <MyST ast={field.children} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// field nodes are always rendered by FieldListRenderer iterating its children;
// register a passthrough to suppress "unknown node type" warnings.
export const FieldRenderer: NodeRenderer = ({ node }) => {
  return <MyST ast={node.children} />;
};

const FIELD_LIST_RENDERERS = {
  fieldList: FieldListRenderer,
  field: FieldRenderer,
};

export default FIELD_LIST_RENDERERS;
