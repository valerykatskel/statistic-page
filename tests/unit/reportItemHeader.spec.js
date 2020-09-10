import { mount } from "@vue/test-utils";
import ReportItemHeader from "@/components/ReportItemHeader";

describe("ReportItemHeader.vue", () => {
  it("rendered successfull", () => {
    const wrapper = mount(ReportItemHeader, {
      propsData: {
        content: {
          title: "Page title"
        }
      }
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("renders with 'report-header' class", () => {
    const title = "Page title";
    const wrapper = mount(ReportItemHeader, {
      propsData: {
        content: {
          title
        }
      }
    });
    expect(wrapper.classes("report-header")).toBe(true);
  });
});
