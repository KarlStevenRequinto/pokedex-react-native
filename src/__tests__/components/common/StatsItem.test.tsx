import React from "react"
import renderer from "react-test-renderer"
import StatsComponent from "../../../components/common/StatsItem"
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
interface TreeNode {
  type: string
  props: {
    style?: any
    [key: string]: any
  }
  children?: TreeNode[]
}

describe("StatsComponent", () => {
  const mockProps = {
    title: "weigh",
    value: 50,
    unit: "kg",
  }

  it("should render correctly with given props", () => {
    const component = renderer.create(<StatsComponent {...mockProps} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("should display the correct title", () => {
    const component = renderer.create(<StatsComponent {...mockProps} />)
    const tree = component.toTree()

    const titleElement = findByProps(tree, { style: styles.statsTitle })
    expect(titleElement?.children).toContain(mockProps.title.toUpperCase())
  })

  it("should display the correct value and unit", () => {
    const component = renderer.create(<StatsComponent {...mockProps} />)
    const tree = component.toTree()

    const [valueElement, unitElement] = findAllByProps(tree, {
      style: styles.textComponent,
    })

    expect(valueElement?.children).toContain(String(mockProps.value))
    expect(unitElement?.children).toContain(mockProps.unit)
  })

  it("should convert title to uppercase", () => {
    const component = renderer.create(<StatsComponent {...mockProps} />)
    const tree = component.toTree()

    const titleElement = findByProps(tree, { style: styles.statsTitle })

    if (titleElement && titleElement.children) {
      expect(titleElement.children[0]).toBe(mockProps.title.toUpperCase())
    } else {
      throw new Error("Title element or its children are undefined")
    }
  })

  it("should apply the correct styles", () => {
    const component = renderer.create(<StatsComponent {...mockProps} />)
    const tree = component.toTree()

    const containerStyle = findByProps(tree, {
      style: styles.textComponentContainer,
    })?.props.style
    const textComponentStyle = findAllByProps(tree, {
      style: styles.textComponent,
    })[0]?.props.style

    expect(containerStyle).toBe(styles.textComponentContainer)
    expect(textComponentStyle).toBe(styles.textComponent)
  })
})

function findByProps(tree: TreeNode | null, props: any): TreeNode | null {
  if (!tree) return null
  if (matchesProps(tree.props, props)) return tree
  if (tree.children) {
    for (const child of tree.children) {
      const found = findByProps(child, props)
      if (found) return found
    }
  }
  return null
}

function findAllByProps(tree: TreeNode | null, props: any): TreeNode[] {
  const results: TreeNode[] = []
  if (!tree) return results
  if (matchesProps(tree.props, props)) results.push(tree)
  if (tree.children) {
    for (const child of tree.children) {
      results.push(...findAllByProps(child, props))
    }
  }
  return results
}

function matchesProps(props: any, match: any): boolean {
  return Object.keys(match).every((key) => props[key] === match[key])
}
