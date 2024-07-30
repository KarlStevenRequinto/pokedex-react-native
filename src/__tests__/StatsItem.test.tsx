import React from "react"
import { shallow, ShallowWrapper } from "enzyme"
import StatsComponent from "../components/common/StatsItem"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  statsTitle: {
    fontSize: 16,
    color: "#65676b",
    marginVertical: 4,
  },
  textComponentContainer: {
    padding: 8,
    borderRadius: 12,
    width: 160,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#949599",
  },
  textComponent: {
    fontSize: 18,
    fontWeight: "bold",
  },
})

describe("StatsComponent", () => {
  const mockProps = {
    title: "weigh",
    value: 50,
    unit: "kg",
  }

  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<StatsComponent {...mockProps} />)
  })

  it("should render correctly with given props", () => {
    expect(wrapper.exists()).toBe(true)
  })

  it("should display the correct title", () => {
    const titleElement = wrapper.findWhere(
      node => node.prop('style') === styles.statsTitle
    )
    expect(titleElement.children().text()).toBe(mockProps.title.toUpperCase())
  })

  it("should display the correct value and unit", () => {
    const valueElement = wrapper.findWhere(
      node => node.prop('style') === styles.textComponent
    ).at(0)
    const unitElement = wrapper.findWhere(
      node => node.prop('style') === styles.textComponent
    ).at(1)

    expect(valueElement.children().text()).toBe(String(mockProps.value))
    expect(unitElement.children().text()).toBe(mockProps.unit)
  })

  it("should convert title to uppercase", () => {
    const titleElement = wrapper.findWhere(
      node => node.prop('style') === styles.statsTitle
    )

    expect(titleElement.children().text()).toBe(mockProps.title.toUpperCase())
  })

  it("should apply the correct styles", () => {
    const containerStyle = wrapper.findWhere(
      node => node.prop('style') === styles.textComponentContainer
    ).prop('style')
    const textComponentStyle = wrapper.findWhere(
      node => node.prop('style') === styles.textComponent
    ).at(0).prop('style')

    expect(containerStyle).toEqual(styles.textComponentContainer)
    expect(textComponentStyle).toEqual(styles.textComponent)
  })
})
