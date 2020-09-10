import { mount } from "@vue/test-utils";
import PageHeader from "@/components/PageHeader";

describe("PageHeader.vue", () => {
  it("rendered successfull", () => {
    const wrapper = mount(PageHeader);
    expect(wrapper.exists()).toBe(true);
  });
});
