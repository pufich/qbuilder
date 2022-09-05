import React, {Component} from 'react'
import {Query, Builder, Preview, Utils} from 'react-awesome-query-builder'
import config from './config'

const {queryBuilderFormat, queryString} = Utils

var stringify = require('json-stringify-safe')

/*
let ruleset = {
    "condition": "AND",
    "rules": [
        {
            "id": "name",
            "field": "name",
            "type": "string",
            "input": "text",
            "operator": "less",
            "value": "test name"
        },
        {
            "condition": "OR",
            "rules": [
                {
                    "id": "category",
                    "field": "date",
                    "type": "date",
                    "input": "date",
                    "operator": "equal",
                    "value": "2012-01-12"
                },
                {
                    "id": "category",
                    "field": "name",
                    "type": "string",
                    "input": "text",
                    "operator": "equal",
                    "value": "1"
                }
            ]
        }
    ]
}
*/

export default class QueryBuilder extends Component {
  getChildren(props) {
    return (
      <div>
        <div className="query-builder">
          <Builder {...props} />
        </div>
        <br />
        <div>
          queryBuilderFormat:{' '}
          {stringify(queryBuilderFormat(props.tree, props.config))}
        </div>
        <div>stringFormat: {queryString(props.tree, props.config)}</div>
        <div>
          humanStringFormat: {queryString(props.tree, props.config, true)}
        </div>
        <div>Tree: {stringify(props.tree)}</div>
      </div>
    )
  }

  render() {
    const {tree, ...config_props} = config

    return (
      <div>
        <Query {...config_props} get_children={this.getChildren}>
          {' '}
        </Query>
      </div>
    )
  }
}
