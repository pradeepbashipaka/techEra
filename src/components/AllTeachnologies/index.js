import {Component} from 'react'
import Header from '../Header'
import CourseItem from '../CourseItem'

import './index.css'

class AllTeachnologies extends Component {
  state = {
    teachnologies: [],
  }

  componentDidMount() {
    this.getTeachnologies()
  }

  convertIntoCamelCase = eachCourse => ({
    id: eachCourse.id,
    name: eachCourse.name,
    logoUrl: eachCourse.logo_url,
  })

  getTeachnologies = async () => {
    const url = 'https://apis.ccbp.in/te/courses'
    const response = await fetch(url)
    const data = await response.json()
    const updateData = data.courses.map(each => this.convertIntoCamelCase(each))
    console.log(updateData)
    this.setState({teachnologies: updateData})
  }

  render() {
    const {teachnologies} = this.state
    return (
      <>
        <Header />
      </>
    )
  }
}

export default AllTeachnologies
