abstract class KontrlPopup {

  /**
   * A string unique to this popup.
   * Can be used to uniquely identify the popup
   */
  private id: string;

  constructor(params: { id?: string } = {}) {
    this.id = params.id != null ? params.id : this.generateId()
  }

  /**
   * Build the popup element
   */
  public abstract build(): HTMLElement;

  public abstract show(): void;
  public abstract hide(): void;

  /**
   * Generates a random ID to uniquely identify this popup
   */
  private generateId() {
    return (Math.random() * 100000000).toString();
  }

  public getId() {
    return this.id;
  }

}

export default KontrlPopup;