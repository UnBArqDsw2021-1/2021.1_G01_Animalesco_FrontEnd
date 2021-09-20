export async function useService(service, functionName, params = []) {
  try {
    let functionReturn = await service[functionName](...params);
    return functionReturn;
  } catch (error) {
    console.error(error.response.data);
    return { error: error.message };
  }
}
