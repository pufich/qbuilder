import React              from 'react'
import PropTypes          from 'prop-types'
import { Builder, Utils } from 'react-awesome-query-builder'
import stringify          from 'json-stringify-safe'

BuilderWrapper.propTypes = {
  tree:   PropTypes.object,
  config: PropTypes.object,
  output: PropTypes.func
}
export default function BuilderWrapper({output, ...props}) {
  handleOutput(output, props)

  return (
    <div className='query-builder'>
      <Builder {...props} />
    </div>
  )
}

const handleOutput = (output, {tree, config}) => {
  if(!output) return

  output({
    tree:          stringify(tree),
    builderFormat: stringify(Utils.queryBuilderFormat(tree, config))
  })
}
